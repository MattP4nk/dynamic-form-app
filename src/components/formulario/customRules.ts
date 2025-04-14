export const customRules = {
    accepted: (message: string) => {
        return value => ['yes', 'on', 1, true, '1', 'true'].includes(value) || message
    },
    alpha: (message: string) => {
        return value => /[a-zA-Z]+$/.test(value) || message
    },
    noSpace: (message: string) => {
        return value => (value || '').indexOf(' ') < 0 || message
    },
    numeric: (message: string) => {
        return value => /^[0-9]+$/.test(value) || message
    },
    noNumbers: (message: string) => {
        return value => !/^[0-9]+$/.test(value) || message
    },
    regex: (message: string, regex: string) => {
        return value => new RegExp(regex).test(value) || message
    },
    url: (message: string) => {
        return value => /^(((?!-))(xn--|_{1,1})?[a-z0-9-]{0,61}[a-z0-9]{1,1}\.)*(xn--)?([a-z0-9][a-z0-9\-]{0,60}|[a-z0-9-]{1,30}\.[a-z]{2,})$/.test(value) || message
    },

};