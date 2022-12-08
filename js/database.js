

        var enterID = document.querySelector("#enterID");
        var enterName = document.querySelector("#enterName");

        var enterEmail = document.querySelector("#enterEmail");
        var enterDoc = document.querySelector("#enterDoc");
        var enterDate = document.querySelector("#enterDate");

        var findID = document.querySelector("#findID");
        var findName = document.querySelector("#findName");
        var findEmail = document.querySelector("#findEmail");
        var findDoc = document.querySelector("#findDoc");
        var findDate = document.querySelector("#findDate");
       


        var insertBtn = document.querySelector("#insert");
        var updateBtn = document.querySelector("#update");
        var removeBtn = document.querySelector("#remove");
        var findBtn = document.querySelector("#find");

        function InsertData() {
            set(ref(db, "People/" + enterID.value), {
                Name: enterName.value,
                ID: enterID.value,
                Email: enterEmail.value,
                Document: enterDoc.value,
                Date: enterDate.value
            })
                .then(() => {
                    alert("Data added successfully");
                })
                .catch((error) => {
                    alert(error);
                });
        }

        function FindData() {
            const dbref = ref(db);

            get(child(dbref, "People/" + findID.value))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        findName.innerHTML = "Name: " + snapshot.val().Name;
                        findEmail.innerHTML = "Email: " + snapshot.val().Email;
                        findDoc.innerHTML = "Document: " + snapshot.val().Document;
                        findDate.innerHTML = "Date: " + snapshot.val().Date;


                    } else {
                        alert("No data found");
                    }
                })
                .catch((error) => {
                    alert(error)
                })
        }

        function UpdateData() {
            update(ref(db, "People/" + enterID.value), {
                Name: enterName.value,
                Age: enterAge.value
            })
                .then(() => {
                    alert("Data updated successfully");
                })
                .catch((error) => {
                    alert(error);
                });
        }

        function RemoveData() {
            remove(ref(db, "People/" + enterID.value))
                .then(() => {
                    alert("Data deleted successfully");
                })
                .catch((error) => {
                    alert(error);
                });
        }

        insertBtn.addEventListener('click', InsertData);
        updateBtn.addEventListener('click', UpdateData);
        removeBtn.addEventListener('click', RemoveData);
        findBtn.addEventListener('click', FindData);

