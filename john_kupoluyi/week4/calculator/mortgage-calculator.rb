 puts "================Mortgage Calculator====================="

 print "How much do you want to borrow (Principal)?: "
 principal = gets.to_f

 print "Over how many months?: "
 period = gets.to_i

 print "What is the annual interest rate (%): "
 rate = gets.to_f/100

 mthly_rate = rate/12

 numerator = principal * mthly_rate * (1 + mthly_rate)**period
 denominator = (1 + mthly_rate) ** period - 1

 mthly_payment = numerator/denominator

 puts "Your monthly mortgage payment amount will be #{mthly_payment.round(2)}"
