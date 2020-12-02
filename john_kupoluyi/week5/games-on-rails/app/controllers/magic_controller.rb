class MagicController < ApplicationController

  def ask_question

  end

  def answer
    magic_answer = [
      'It is certain.',
      'It is decidedly so.',
      'Without a doubt.',
      'Yes – definitely.',
      'You may rely on it.',
      'As I see it, yes.',
      'Most likely.',
      'Outlook good.',
      'Yes.',
      'Signs point to yes.',
      'Reply hazy, try again.',
      'Ask again later.',
      'Better not tell you now.',
      'Cannot predict now.',
      'Concentrate and ask again.',
      'Dont count on it.',
      'My reply is no.',
      'My sources say no.',
      'Outlook not so good.',
      'Very doubtful.'
    ]
    @question = params[:question]
    @answer = magic_answer.sample
  end
end
