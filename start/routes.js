'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  /** immunication routes endpoints */
  Route.get('immunization/all-records', 'ImmunizationController.getAllRecords')
  Route.post('immunization/child-registration', 'ImmunizationController.store') 
  Route.post('immunization/search-records', 'ImmunizationController.searchRecords')
  Route.post('immunization/child-profile', 'ImmunizationController.getProfile')

  /** dashboard routes endpoints */
  Route.get('immunization/dashboard', 'HomeController.index')

}).prefix('api/v1')
