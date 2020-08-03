import axios from "axios";

export default {
    // Get a contact with id param
    getContact: function(id) {
        return axios.get(`/api/contact/${id}`)
    },

    // Save a contact 
    saveContact: function(contactForm) {
        return axios.post("/api/contact", contactForm, 
        function() {
            console.log('success')
        });
    }
}

