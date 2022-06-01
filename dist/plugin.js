exports.version = 1
exports.apiRequired = 1
exports.repo = "rejetto/redirect-root"
exports.description = "Redirect users trying to access root directly"

exports.config = {
    url: { label:"URL", helperText: "Where to redirect" }
}

exports.init = api => ({
    middleware(ctx) {
        const url = api.getConfig('url')
        if (url && ctx.path === '/') {
            ctx.redirect(url)
            return true
        }
    }
})
