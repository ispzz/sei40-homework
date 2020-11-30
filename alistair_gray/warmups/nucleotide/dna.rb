# # Nucleotide Count
# DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.
# Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.
# Write a program that will tell you how many times each nucleotide occurs in a string.
# It should also tell you if a character in the string is _not_ a valid nucleotide.
# Example:
# ```ruby
# count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
# # output:
# A: 20
# C: 12
# G: 17
# T: 21
# ```
# ## Source
# The _Calculating DNA Nucleotides_ problem at [Rosalind](http://rosalind.info/problems/dna/)

# Nucleotide Symbols: G A T C

dna_string = "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"

dna_string = dna_string.split("")

dna_stringA = 0
dna_stringC = 0
dna_stringG = 0
dna_stringT = 0

dna_string.each do |letter|
  if letter == "A" then dna_stringA += 1
  elsif letter == "C" then dna_stringC += 1
  elsif letter == "G" then dna_stringG += 1
  elsif letter == "T" then dna_stringT += 1
  else puts "This #{letter} is not a valid nucleotide"

  end

end # each dna_string

puts "There are #{dna_stringA} nucleotides for A"
puts "There are #{dna_stringC} nucleotides for C"
puts "There are #{dna_stringG} nucleotides for G"
puts "There are #{dna_stringT} nucleotides for T"
