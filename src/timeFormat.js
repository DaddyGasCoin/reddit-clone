import prettyMilliseconds from 'pretty-ms';


const formater = (milliseconds) => {
    const map = {
        y: 'years',
        m: 'months',
        d: 'days'
    }
    const x = prettyMilliseconds(milliseconds, { compact: true });
    const sortOption = map[x.slice(-1)]
    const number = x.slice(0, -1)
    const result = new Intl.RelativeTimeFormat('en').format(-number, sortOption)

    return result

}

export default formater