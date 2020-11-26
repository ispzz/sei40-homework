# Get the array of stations from the line name

plan_trip = {nline: = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
              lline: = ["8th", "6th", "Union Square", "3rd", "1st"],
              sixline: = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astore place"]}

singleLineTrip = (train_line, start_position, end_postion)



# Find the positions of the start and stop stations in the array

start_position = plan_trip[train_line] .index( start_station )
end_positon = plan_trip[train_line] .index( end_station )


# Work out how to get every station between start and stop

destination = plan_trip[train_line][start_position..end_positon]
