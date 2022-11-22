#include <iostream>

int main() {
    std::string sentence;
    std::cout << "What's the sentence?";
    getline(std::cin, sentence);
    int sentenceLen = sentence.size();
    for(int i = 0;i < sentenceLen;++i) {
    int k = sentence[i];
        while(k > 0) {
        if(k % 128 == 0) {
            std::cout << "++++++++[->++++++++++++++++<]";
            k-= 128;
        } 
        else if(k % 64 == 0) {
            std::cout << "++++++++[->++++++++<]";
            k-= 64;
        }
        else if(k % 32 == 0) {
            std::cout << "++++[->++++++++<]";
            k-= 32;
        }
        else if(k % 16 == 0) {
            std::cout << "++++[->++++<]";
            k-= 16;
        }
        else if(k % 8 == 0) {
            std::cout << "++++[->++<]";
                k-= 8;
        }
        else if(k % 4 == 0){
            std::cout << "++[->++<]";
                k-= 4;
        }
        else if(k % 2 == 0) {
            std::cout << "+[->++<]";
                k-= 2;
        }
        else if(k % 2 != 0){
            std::cout << "+[->+<]";
                k--;
        }
      }
      if(i < sentenceLen - 1) {
      std::cout << ">>";
      }
      else{
        std::cout << ".";
      }
    }
}