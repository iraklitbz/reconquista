export function capitalLetter (text: string): string {
    return `<span class="float-left w-32 mr-4"><img src="/img/${text.charAt(0)}.svg" alt="cappital letter"></span>${text.substring(1)}<span class="clear-both"></span>`;
}
