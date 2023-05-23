const dnaToRna: Record<string, string> = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

export function toRna(dna: string): string {
  const rnaArray = [...dna].map((nucleotide) => {
    const rna = dnaToRna[nucleotide];
    if (!rna) {
      throw new Error("Invalid input DNA.");
    }
    return rna;
  });

  return rnaArray.join("");
}
