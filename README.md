# Facts-Page #

Configure a path to response server statistics of Meteor applications in JSON.

## Installation ##

```sh
meteor add szchenghuang:facts-page
```

## Example ##

```js
import FactsPage from 'meteor/szchenghuang:facts-page';

Meteor.startup( () => {
  if ( Meteor.isServer ) {
    FactsPage.init({ path: '/path/to/page' });
  }
});
```

## Usage ##

`facts-page` serves requests server statistics in JSON. Simply call `FactsPage.init()` to set the optional path. It defaults to `/facts`. Pass no argument if you are happy with the default path.

It depends on the `facts` package from Meteor; server side only.

## License ##

MIT. See [LICENSE.md](http://github.com/szchenghuang/facts-page/blob/master/LICENSE.md) for details.
