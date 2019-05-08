new Vue({
    el: "#app",
    data: {
        no: '0',
        operate: '',
        number: 0,
        isActive: false,
    },
    methods: {
        addNumbers: function(number) {
              if(this.no == '0' && number == '0' || this.no.length > 12) return ;
              if(this.no == '0')  this.no = '';
              this.no += number;
              if(this.no.length > 8)  this.isActive = true;

        },
        eraseNumber: function() {
              if(this.no == '0' && this.no.length < 2) return ;
              this.no = (parseFloat(this.no.substr(0, this.no.length - 1)) > 0 ? this.no.substr(0, this.no.length - 1) : 0);
              if(this.no.length <= 8) this.isActive = false;
        },
        operationNumber: function(operation) {
              switch (operation) {
                case '+':
                    this.number = parseFloat(this.no);
                    this.no = '0', this.operate = operation;
                    break;
                case '-':
                    this.number = parseFloat(this.no);
                    this.no = '0', this.operate = operation;
                    break;
                case '*':
                    this.number = parseFloat(this.no);
                    this.no = '0', this.operate = operation;
                    break;
                case '/':
                    this.number = parseFloat(this.no);
                    this.no = '0', this.operate = operation;
                    break;
                case '*':
                    this.number = parseFloat(this.no);
                    this.no = '0', this.operate = operation;
                    break;
                case '%':
                    this.number = parseFloat(this.no);
                    this.no = '0', this.operate = operation;
                    break;
                case '=':
                        if(this.operate == '+') {
                              console.log(this.no);
                              console.log(this.number);
                              console.log(parseFloat(this.no) + parseFloat(this.number));
                              this.no = (parseFloat(this.number) + parseFloat(this.no)).toString();
                        }

                        if(this.operate == '-')
                               this.no = (parseFloat(this.number) - parseFloat(this.no)).toString();

                        if(this.operate == '/')
                               this.no = (parseFloat(this.number) / parseFloat(this.no)).toString();

                        if(this.operate == '*')
                               this.no = (parseFloat(this.number) * parseFloat(this.no)).toString();

                        if(this.operate == '%')
                                this.no = (parseFloat(this.number) % parseFloat(this.no)).toString();

                        if(this.no.length > 7)  this.no = this.no.substr(0, 5);

                        // if(this.operate == '*') this.no = this.number * parse
                        break;
                default:

              }
        }
    }
})
