function bte() {
    var sentence = prompt("what's the sentence?");
    var endOf = 0;
    var toBuild = [];
    var iter = 0;
    for(var i = 0;endOf != 2;i++) {
        if(sentence[i] == '>' && endOf == 0) {
            toBuild.push(0);
        }
        else if(sentence[i] == '+' && endOf == 1) {
            ++toBuild[iter];
        }
        else if(sentence[i] == '>' && endOf == 1) {
            ++iter;
        }
        else if(sentence[i] == '-' && endOf == 1) {
            --toBuild[iter];
        }
        else if(sentence[i] == '<' && endOf == 1) {
            --iter;
        }
        else if(sentence[i] == '[' && endOf == 1) {
            var manipKey = iter;
            var loopBeg = i;
            for(var j = loopBeg;toBuild[manipKey] != 1;j++) {
                if(sentence[j] == '-') {
                --toBuild[iter];
                }
                else if(sentence[j] == '+') {
                ++toBuild[iter];
                }
                else if(sentence[j] == '<') {
                --iter;
                }
                else if(sentence[j] == '>') {
                ++iter;
                }
                else if(sentence[j] == ']') {
                    j = loopBeg;
                }

            }
        }
        else if(i >= sentence.size()) {
            i = -1;
            ++endOf;
        }
        else{
            continue;
        }
    }
    for(var i = 0;i != toBuild.size();i++) {
       console.log('[',toBuild[i],']');
    } 
    }