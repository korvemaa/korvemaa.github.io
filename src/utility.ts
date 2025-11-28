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
