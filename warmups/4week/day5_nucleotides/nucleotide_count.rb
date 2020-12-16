# DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.

# Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.

# Write a program that will tell you how many times each nucleotide occurs in a string.

# It should also tell you if a character in the string is _not_ a valid nucleotide.

def nucleotides_count( dna )
    
    bases_count = {
        'A' = 0,
        'C' = 0,
        'G' = 0,
        'T' = 0
    }

    #  iterate through each character in the DNA string
    # can also do dna.each_char
    dna.chars.each do |letter|
        # puts letter

        # .key? is a predicate method, will return true if the key given(base) is present in the hash
        if bases_count.key? letter
            bases_count[ letter ] += 1

        else
            # if the base is not a key in the hash then output that it's not a valid nucleotide.
            puts "#{letter} is not a valid nucleotide."

        end # end of bases_count.key?

    end # end of dna.each_char

    # output the number of occurances of each nucleotide in line 36
    bases_count.each do |key, val|

        puts "#{key}: #{val}"

    end # end bases_count.each

end # nucleotides_count

nucleotides_count("AGCTTTTXCATTCTGACTGCAACMGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC")