"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
exports.OR = (pred1, pred2) => {
    return value => ramda_1.or(pred1(value), pred2(value));
};
exports.AND = (pred1, pred2) => {
    return value => ramda_1.and(pred1(value), pred2(value));
};
exports.exclude = ramda_1.pipe(ramda_1.complement, ramda_1.filter);
exports.isNotNil = ramda_1.complement(ramda_1.isNil);
exports.highlight = (word, HIGHLIGHT_DELIMETER = ' ') => {
    return str => {
        if (!word) {
            return str;
        }
        const regStr = word
            .split(HIGHLIGHT_DELIMETER)
            .filter(word => word !== '')
            .join('|');
        const reg = new RegExp(`(${regStr})`, 'gi');
        return str.replace(reg, '<mark>$1</mark>');
    };
};
exports.removeTag = html => {
    if (html === undefined) {
        return '';
    }
    return html.replace(/(<([^>]+)>)/gi, '');
};
exports.peek = (...args) => {
    return value => {
        // console.log('peek called')
        console.log(...args, value); // eslint-disable-line
        return value;
    };
};
exports.go = (...args) => {
    // @ts-ignore
    return ramda_1.pipe(...args.slice(1))(args[0]);
};
exports.constant = value => {
    return () => value;
};
exports.noop = () => { };
exports.indexMap = (...args) => {
    if (args.length === 1) {
        return list => {
            Array.prototype.map.call(list, args[0]);
        };
    }
    return Array.prototype.map.call(args[1], args[0]);
};
exports.idEqual = ramda_1.propEq('_id');
exports.findById = ramda_1.pipe(exports.idEqual, ramda_1.find);
exports.updateBy = ramda_1.curry((pred, tobe) => {
    return list => {
        const index = ramda_1.findIndex(pred)(list);
        return ramda_1.update(index, tobe)(list);
    };
});
exports.removeBy = pred => {
    return list => {
        const index = ramda_1.findIndex(pred)(list);
        return ramda_1.remove(index, 1)(list);
    };
};
exports.updateById = ramda_1.curry((id, tobe, list) => {
    return exports.updateBy(exports.idEqual(id))(tobe)(list);
});
exports.removeById = ramda_1.curry((id, list) => {
    return exports.removeBy(exports.idEqual(id))(list);
});
/*
 * 패러미터 문자열 중 아래와 같이 매칭되는 문자열을 변환
 * [제목](링크) => <a href="링크">제목</a>
 * */
exports.addLink = ramda_1.replace(/\[(.+)\]\(([^()]+)\)/g)('<a href="$2">$1</a>');
exports.flatLog = (...args) => {
    const serialized = args.map(arg => {
        if (typeof arg === 'object') {
            return JSON.stringify(arg, null, 2);
        }
        else if (typeof arg === 'function') {
            return arg.toString();
        }
        return arg;
    });
    // eslint-disable-next-line
    console.log(...serialized);
};
exports.forceFileDownload = (blob, name) => {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', name);
    link.click();
};
exports.download = ({ uri, name }) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(uri);
    const blob = yield response.blob();
    exports.forceFileDownload(blob, name);
});
exports.getHostname = url => {
    let start = url.indexOf('://') + 3;
    let end = url.indexOf('/', start);
    return url.slice(start, end);
};
exports.getProtocol = url => {
    let end = url.indexOf('://') + 3;
    return url.slice(0, end);
};
exports.assignQueryParams = url => {
    return paramObj => {
        exports.setQueryParams(Object.assign([], exports.getQueryParams(url), paramObj));
    };
};
exports.appendQueryParams = paramObj => {
    return exports.assignQueryParams(location.href)(paramObj);
};
exports.copyToClipboard = val => {
    let t = document.createElement('textarea');
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
};
exports.blinkDomElement = dom => {
    const BORDER_STYLE = '1px solid red';
    const INTERVAL = 500;
    const TIMEOUT = 3000;
    if (!dom) {
        console.warn('[blinkDomElement] Not found blink dom');
        return;
    }
    dom.style.border = BORDER_STYLE;
    const interval = setInterval(() => {
        // console.log('3초간 깜빡임', dom.style.border)
        dom.style.border = dom.style.border === BORDER_STYLE ? '' : BORDER_STYLE;
    }, INTERVAL);
    setTimeout(() => {
        // console.log('깜빡임 끝')
        clearInterval(interval);
        dom.style.border = '';
    }, TIMEOUT);
};
exports.timer = timeout => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
};
exports.esModule = _module => {
    return _module.default || _module;
};
function removeExt(filename) {
    return filename.replace(/\.(\w*)$/, '');
}
exports.removeExt = removeExt;
exports.getFileName = (path, ext = false) => {
    const getFileNameRegex = /[^\\/]+\.[^\\/]+$/;
    const [file = null] = path.match(getFileNameRegex) || [];
    const name = file || path;
    return ext ? name : removeExt(name);
};
exports.nl2br = str => {
    if (!str) {
        return '';
    }
    return str.replace(/\r\n|\n/g, '<br />');
};
exports.createRandomString = (length = 5) => {
    let text = '';
    // noinspection SpellCheckingInspection
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    Array.from(Array(length)).forEach(() => {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    });
    return text;
};
exports.getQueryParams = url => {
    const params = {};
    const idx = url.indexOf('?') + 1;
    const fromIdx = url.slice(idx);
    // @ts-ignore
    fromIdx.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
        params[$1] = $3;
    });
    // console.log(params)
    return params;
};
exports.setQueryParams = paramObj => {
    const params = Object.entries(paramObj)
        .map(([key, value]) => {
        let valueStr = value;
        if (Array.isArray(value)) {
            valueStr = value.join(',');
        }
        return key + '=' + valueStr;
    })
        .join('&');
    // console.log(params)
    window.history.pushState({}, '', '?' + params);
};
exports.delay = (fn, ms) => {
    return new Promise(resolve => {
        const timeout = setTimeout(() => {
            fn();
            resolve(timeout);
        }, ms);
    });
};
exports.onlyNumber = event => {
    if (event.keyCode < 48 || event.keyCode > 57) {
        event.returnValue = false;
    }
};
exports.numberWithCommas = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
exports.enableUrl = str => {
    if (!str) {
        return '';
    }
    const isUrl = /((?:http|https?|ftps?|sftp):\/\/(?:[a-z0-9-]+\.)+[a-z0-9]{2,4}\S*)/gi;
    if (isUrl.test(str)) {
        return str.replace(isUrl, '<a href="$1">$1</a>');
    }
    const wwwStart = /(www\.(?:[a-z0-9-]+\.)+[a-z0-9]{2,4}\S*)/gi;
    if (wwwStart.test(str)) {
        return str.replace(wwwStart, '<a href="http://$1">$1</a>');
    }
    return str;
};
exports.loadJs = src => {
    return new Promise(resolve => {
        const headTag = document.getElementsByTagName('head')[0];
        const newScript = document.createElement('script');
        newScript.type = 'text/javascript';
        newScript.onload = () => {
            resolve();
        };
        newScript.src = src;
        headTag.appendChild(newScript);
    });
};
exports.sortKeys = (obj, pred) => {
    const keys = Object.keys(obj);
    const sorted = {};
    keys.sort(pred).forEach(key => {
        sorted[key] = obj[key];
    });
    return sorted;
};
//# sourceMappingURL=index.js.map