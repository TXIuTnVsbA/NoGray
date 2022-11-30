plugin.onLoad(() => {
    betterncm.utils.waitForElement("html").then(async (settingsDom) =>{
        settingsDom.appendChild(
            dom("style", {innerHTML: `
.f-gray{-webkit-filter:grayscale(0);}
.f-gray{filter:grayscale(0);}
`
                }
            )
        )
    });
})
plugin.onConfig((tools) => {})