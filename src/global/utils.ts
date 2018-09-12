export class Utils {
    public static guidGenerator() {
        const S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }

    public static getExtension(str: string) {
        if (str) {
            const split = str.split('.');
            return split[split.length - 1];
        } 
        return '';
    }
}