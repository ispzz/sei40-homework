def nucleotides_count( dna )

  bases_count = {
    'A' => 0,
    'C' => 0,
    'G' => 0,
    'T' => 0
  }

  dna.chars.each do |letter|

    if bases_count.key? letter
        bases_count[ letter ] += 1
    else

      puts "#{letter} is not a valid nucleotide."
    end

  end

  bases_count.each do |key, val|
  puts "#{key}: #{val}"
end 

nucleotides_count("AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC")
end
