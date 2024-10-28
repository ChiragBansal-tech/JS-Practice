int cp(int num){
    if(num<2){
        return 0;
    }
    else
    {
        int x = num/2;
        for(int i=0; i <=x ; i++)
        {
            if(num % i == 0)
            {
                return 0;
            }
        }
    }
    return 1;
}
int main(){
    int a=1 ,b=100;
    for(int i=a;i<=b;i++){
        if(cp(i)){
            print("%d",i)
        }
    }
    return 0;
}