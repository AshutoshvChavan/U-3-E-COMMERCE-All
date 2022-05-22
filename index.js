document.querySelector('#form').addEventListener('submit', submitFunciton);
        var data = JSON.parse(localStorage.getItem('Products'))||[];

        function productData(name,cat,url,price,gender){
            this.name = name;
            this.category = cat;
            this.imageUrl = url;
            this.price = price;
            this.gender = gender;
            
        }


        function submitFunciton(){
            event.preventDefault();
            var name = document.querySelector('#name');
            var category = document.querySelector('#category');
            var image = document.querySelector('#image');
            var price = document.querySelector('#price');
            var gender = document.querySelector('#gender');
            let dataObj = new productData(name.value, category.value, image.value, price.value, gender.value);
            data.push(dataObj)
            localStorage.setItem('Products',JSON.stringify(data));
            alert('Data Added successfully..!');
            name.value = '';
            category.value = '';
            image.value = '';
            price.value = '';
            gender.value = '';
        }