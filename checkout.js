



var arrayList = document.getElementById("arrayList");
        
        
        var arrayData = JSON.parse(localStorage.getItem('cart')) || [];

        
        console.log(arrayData);

        for (i = 0; i < arrayData.length; i++) {
            const checkoutCard = document.createElement("div"); 
            checkoutCard.className = "checkout-card"; 
            document.getElementById("checkout_cards_container").appendChild(checkoutCard); 
            
            const img_div = document.createElement("div");
            img_div.className = "image-container"; 
            checkoutCard.appendChild(img_div);
            
            const img = document.createElement("img");
            img.className = "checkout-product-img";
            img.src = arrayData[i].img;
            img_div.appendChild(img);
            
            const c_div = document.createElement("div");
            c_div.className = "content-container"; 
            checkoutCard.appendChild(c_div);
            
            const c_name = document.createElement("h4");
            c_name.className = "cname";
            c_name.textContent = arrayData[i].productName;
            c_div.appendChild(c_name);
            
            const c_qty = document.createElement("p");
            c_qty.className = "cqty";
            c_qty.textContent = 'x' + arrayData[i].quantity;
            c_div.appendChild(c_qty);
            
            const newParagraph = document.createElement("p");
            const span1 = document.createElement("span");
            span1.textContent = "Amount: Rs ";
            const span2 = document.createElement("span");
            span2.className = "cprice";
            span2.textContent = arrayData[i].price;
            newParagraph.appendChild(span1);
            newParagraph.appendChild(span2);
            c_div.appendChild(newParagraph);

            const totalCount = document.getElementById('item-count');
            totalCount.innerHTML=arrayData.length;
        }
        
