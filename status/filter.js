
const repos = []
const config = {}

const skipRepo = config.excluded?.split(",").map(e => e.trim()) || []
const skipUser = config.excluded_users?.split(",").map(e => e.trim()) || []
const skipLang = config.excluded_langs?.split(",").map(e => e.trim()) || []

let total = 0

const maxLangRepo = {}
for (const repo of repos) {
    const user = repo.name.split('/')[0]
    if (skipUser.includes(user)) {
        continue
    }
    if (skipRepo.includes(repo.name)) {
        continue
    }
    for (const lang of repo.languages) {
        if (skipLang.includes(lang.name)) {
            continue
        }
        if (maxLangRepo[lang.name] === undefined) {
            maxLangRepo[lang.name] = {
                lang: lang.name,
                size: 0,
                per: 0,
                max: 0,
                repo: []
            }
        }
        const current = maxLangRepo[lang.name].size
        maxLangRepo[lang.name].size += lang.size
        maxLangRepo[lang.name].repo.push({
            repo: repo.name,
            size: lang.size,
        })
        total += lang.size
        if (lang.size > current) {
            maxLangRepo[lang.name].max = lang.size
        }
    }
}


const topLang = []
for (const lang of Object.keys(maxLangRepo)) {
    maxLangRepo[lang].per = maxLangRepo[lang].size / total
    maxLangRepo[lang].repo.sort((a,b) => b.size - a.size)
    topLang.push(maxLangRepo[lang])
}

topLang.sort((a,b) => b.size - a.size)



console.log(JSON.stringify(topLang, null, " "))

for (const k of Object.keys(config)) {
    console.log(`${k.toUpperCase()} = ${config[k].split(",").map(e => e.trim()).join(",")}`)
}