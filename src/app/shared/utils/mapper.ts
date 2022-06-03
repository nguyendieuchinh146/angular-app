export class MapUtils {
    static getObject<T>(obj: T): any {
        const key = 'name';
        const value = {'test' : 1}
        var jsonObj: {[k: string]: any} = {};
        jsonObj[key] = value;
        return jsonObj;
    }
}