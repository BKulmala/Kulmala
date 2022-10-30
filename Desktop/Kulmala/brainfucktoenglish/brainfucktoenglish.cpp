#include <iostream>
#include <vector>
void brainfucktoenglish();
int main() {
 brainfucktoenglish();   
}
void brainfucktoenglish() {
    std::string sentence;
    std::cout << "What's the sentence?";
    std::cin >> sentence;
    int endOf = 0;
    std::vector<int> toBuild = {0};
    int iter = 0;

    for(int i = 0;endOf != 2;i++) {
        if(sentence[i] == '>' && endOf == 0) {
            toBuild.push_back(0);
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
            int manipKey = iter;
            int loopBeg = i;
            for(int j = loopBeg;toBuild[manipKey] != 1;j++) {
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
    for(int i = 0;i != toBuild.size();i++) {
        std::cout << '[' << toBuild[i] << ']';
    } 
}
