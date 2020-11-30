


def count input
   letters = input.split(//)
  p letters
end

  def freq letters
     frequency = Hash.new(0)
   letters.each{|key| frequency[key] +=1}
    p frequency
  end





   def nucleotides_count (dna)

     bases_count ={
       'A' => 0,
       'C' => 0,
       'G' => 0,
       'T' => 0,
     }

     dna.each_char do |letter|

       if bases_count.key? letter
         bases_count[letter] += 1

       else
         puts"#{letter} is not a valid nucleotide."
       end
            #missing a bit in here
     end

   end
   nucleotides_count("AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC")

     }
