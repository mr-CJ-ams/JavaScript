class UserRegistration{
    constructor(official_email, tin, establishment_name, business_address, business_website, contact_number, email_address, date_established, owner_firstname, owner_middlename, owner_lastname, owner_address, nationality, gen_manager_firstname, gen_manager_middlename, gen_manager_lastname, gen_manager_contact_number, gen_manager_email, gen_manager_nationality ){
        this.official_email = official_email;
        this.tin = tin;
        this.establishment_name = establishment_name;
        this.business_address = business_address;
        this.business_website = business_website;
        this.contact_number = contact_number;
        this.email_address = email_address;
        this.date_established = date_established; 
        this.owner_firstname = owner_firstname;
        this.owner_middlename = owner_middlename;
        this.owner_lastname = owner_lastname;
        this.owner_address = owner_address;
        this.nationality = nationality;
        this.gen_manager_firstname = gen_manager_firstname;
        this.gen_manager_middlename = gen_manager_middlename;
        this.gen_manager_lastname = gen_manager_lastname;
        this.gen_manager_contact_number = gen_manager_contact_number;
        this.gen_manager_email = gen_manager_email;
        this.gen_manager_nationality =  gen_manager_nationality;
    }
}

const user = new UserRegistration("amaquinresort@gmail.com", 831153, "Amaquin's Resort", "Tawala, Panglao", "amaquinresort.com", 639663164105,  "carlojead@gmail.com", 7-15-2010, "Carlojead", "Emol", "Amaquin", "Sapa, Bolod, Panglao", "Filipino", "Rommny", "Lim", "Larch", 639519543723, "rommny@gmail.com", "Cambodian");

const account_details = document.getElementById("acc_dtl");
const establishment_details = document.getElementById("est_dtl");
const management_details = document.getElementById("mgm_dtl");
const manager_info = document.getElementById("mngr_info");



// display.innerHTML = `The ${user.establishment_name} is owned by ${user.nationality} entreprenuer ${user.owner_firstname} ${user.owner_middlename} ${user.owner_lastname}. The General Manager is ${user.gen_manager_firstname} ${user.gen_manager_middlename} ${user.gen_manager_lastname}`;