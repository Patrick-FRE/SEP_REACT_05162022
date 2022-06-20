export const getInitStockInfo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ initCounter: 3, incrementNum: 3, decrementNum: 3 })
        }, 5000)
    })
}