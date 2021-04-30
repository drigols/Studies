/**
* Rodrigo Leite - Software Engineer
* 19/12/2019
*/
class Account {
  int number;
  String holder;
  double balance;

  void withdraw(double quantity){
    double newBalance = this.balance - quantity;
    this.balance = newBalance;
  }

  void deposit(double quantity){
    this.balance += quantity;
  }
}
