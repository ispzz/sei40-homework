class SecretController < ApplicationController
    def form
    end

    def play
        guess = params[:guess].to_i
        answer = (1..10).to_a.sample

        @result = 
            if guess == answer then "Good guess! You're right"
            else "Uh oh, better luck next time"
            end
    end
end