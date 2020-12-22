(function (win) {
  console.log('Router ------->')
  function Router() {
    this.routes = {}
    this.init(win.location.pathname)
    this.bind()
  }
  Router.prototype.init = function (hash) {
    history.replaceState({ path: hash }, null, hash)
    if (this.routes[hash]) this.routes[hash]()
  }
  Router.prototype.route = function (hash, callback) {
    this.routes[hash] = callback ? callback : function () { }
  }
  Router.prototype.go = function (hash) {
    history.pushState({ path: hash }, null, hash)
    if (this.routes[hash]) this.routes[hash]()
    console.log(history)
  }
  Router.prototype.bind = function () {
    win.addEventListener('popstate',  (e) => {
      let hash = e.state && e.state.path
      if (this.routes[hash]) this.routes[hash]()
    })
  }
  win.Router = Router
})(window)