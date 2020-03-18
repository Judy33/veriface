module.exports =  {
    plugins: {
        autoprefixer: {},
        "postcss-pxtorem": { 
            rootValue: 16,
            unitPrecision: 5,
            propList: ['*'],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 1,
            exclude: [/node_modules/i,/layui.css/i]
        }
    }
}