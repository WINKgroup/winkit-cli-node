


module.exports = function(route, router, apiHandlers) {
    router[route.method.toLowerCase()](route.urlPath, apiHandlers.views[route.handler].bind(apiHandlers.views))
};