import figlet from "figlet";

export function timeAgo(date: Date): string {
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const units = [
        { name: "year", secs: 60 * 60 * 24 * 365 },
        { name: "month", secs: 60 * 60 * 24 * 30 },
        { name: "day", secs: 60 * 60 * 24 },
        { name: "hour", secs: 60 * 60 },
        { name: "minute", secs: 60 },
    ];

    for (const unit of units) {
        const count = Math.floor(seconds / unit.secs);
        if (count >= 1) {
            return count === 1
                ? `1 ${unit.name} ago`
                : `${count} ${unit.name}s ago`;
        }
    }

    return "just now";
}

export function formatTime(date: Date | undefined): string | null {
    if (!date) return null;

    return date.toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
    });
}

export function timeSince(from: Date, to: Date = new Date()): string {
    let delta = Math.floor((to.getTime() - from.getTime()) / 1000);

    const units: [string, number][] = [
        ["yr", 365 * 24 * 60 * 60],
        ["mo", 30 * 24 * 60 * 60],
        ["day", 24 * 60 * 60],
        ["hour", 60 * 60],
        ["minute", 60],
        ["second", 1],
    ];

    const parts: string[] = [];

    for (const [name, seconds] of units) {
        const amount = Math.floor(delta / seconds);
        if (amount > 0) {
            parts.push(`${amount} ${name}${amount > 1 ? "s" : ""}`);
            delta -= amount * seconds;
        }
    }

    return parts.length > 0 ? parts.slice(0, 2).join(" ") : "just now";
}

export function createText(text: string, font: string, trim: boolean = false) {
    let output = figlet.textSync(text, { font: font });
    if (trim)
        output = output.split(/\r?\n/).filter(line => line.trim() !== '').join('\n');

    return output;
}