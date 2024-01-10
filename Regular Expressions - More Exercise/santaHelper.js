function santaHelper(arr) {

    let num = Number(arr.shift());
    
    let command = arr.shift();
      
      while (command != 'end') {
        
        let encrypted = '';
        
        for (let ch of command) { 
                        
                        encrypted += String.fromCharCode(ch.charCodeAt() - num);
        }
                
        let pattern = /@(?<name>[A-Za-z]+)[^-@!:>]*!(?<behavior>[G|N])!/;
        
        let match = encrypted.match(pattern);
        
        if (match) {
              let {name, behavior} = match.groups;
        
        if (behavior == 'G') {
          console.log(name)
        } else {
          command = arr.shift();
          continue;
        }
        }
       
        command = arr.shift();
      }
    
    }

santaHelper(['3',
'N}eideidmk$\'(mnyenmCNlpamnin$J$',
'ddddkkkkmvkvmCFrqqrunvevek$J$nmgievnge',
'ppqmkkkmnolmnnCEhq/vkievk$Q$',
'yyegiivoguCYdohqwlqh/kguimhk$J$',
'end'])