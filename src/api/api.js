const flow = {
    flow1: [],

    flow2: [
        "🔴 Поток 1",
        "💊 Поток 2",
        "✅ Поток 3",
        "🌷 Поток 4",
        "🔴 Поток 5",
        "❓ Поток 6",
    ],
}


const fetchAll = () => new Promise((resolve) => {
    window.setTimeout(function () {
        resolve(flow)
    }, 20)
})

export default fetchAll
