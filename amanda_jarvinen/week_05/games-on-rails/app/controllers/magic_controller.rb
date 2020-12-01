class MagicController < ApplicationController
    # Magic 8 ball takes user's questions from a form submission and returns a positive or negative answer.
    def ask_question
    end

    def get_answer
        @question = params[:magic_question]

        options = ["It is certain", 
                    "It is decidedly so", 
                    "Without a doubt", 
                    "Yes - definitely",
                    "You may rely on it", 
                    "As I see it, yes", 
                    "Most likely", 
                    "Outlook good", 
                    "Yes", 
                    "Signs point to yes",
                    "Don't count on it", 
                    "My reply is no",
                    "My sources say no", 
                    "Outlook not so good",
                    "Very doubtful", 
                    "Reply hazy, try again", 
                    "Ask again later", 
                    "Better not tell you now",
                    "Cannot predict now", 
                    "Concentrate and ask again"]

        @answer = options.sample
    end
end # MagicController