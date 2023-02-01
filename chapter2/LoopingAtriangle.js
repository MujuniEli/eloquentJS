/*   
    Write a loop that makes seven calls to console.log to output the following triangle:
    #
    ##
    ###
    ####
    #####
    ######
    #######

*/

let harsh = ""
for(let i = 0; i < 7; i++){
  	harsh += "#"
  	console.log(harsh)
}

//one-liner Solution!!!
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);