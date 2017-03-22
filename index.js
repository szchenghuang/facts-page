'use strict';

import { Facts } from 'meteor/facts';
import { WebApp } from 'meteor/webapp';

const FactsPage = {};

FactsPage.init = ( { path = '/facts' } = {} ) => {
  WebApp.connectHandlers.use( path, function( req, res ) {
    res.writeHead( 200, { 'Content-Type': 'application/json' } );
    res.end( JSON.stringify( Facts._factsByPackage ) );
  });
};

export default FactsPage;
