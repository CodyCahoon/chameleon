export namespace Util {
    export function shuffle(arr: string[]): string[] {
        const values = new Set();
        while (values.size !== arr.length) {
            const randomIndex = Math.floor(Math.random() * arr.length);
            values.add(arr[randomIndex]);
        }
        return Array.from(values) as string[];
    }

    export function randomNumber(max: number): number {
        return Math.floor(Math.random() * max);
    }
}
