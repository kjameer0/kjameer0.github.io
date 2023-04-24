//takes a repositories name and returns it with each first letter capitalized
export function convertRepoStringToTitle(title: string): string {
  const splitTitle = title.split('-');
  const capiltalizeSplitTitle = splitTitle.map((titleWord) => {
    return titleWord[0].toUpperCase() + titleWord.slice(1);
  });
  return capiltalizeSplitTitle.join(' ');
}
