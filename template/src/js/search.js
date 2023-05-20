document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const suggestionsContainer = document.getElementById('suggestionsContainer');

  searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();

    // Clear previous suggestions
    suggestionsContainer.innerHTML = '';

    // Display the new suggestion based on the search term
    if (searchTerm === 'login' || searchTerm === 'how to login as an organization?') {
      const suggestionDiv = document.createElement('div');
      suggestionDiv.className = 'flex flex-col gap-5';
      suggestionDiv.innerHTML = `
        <section class="flex flex-col gap-2 rounded-xl border border-solid border-body-color-85 bg-white-alpha-20 p-2 drop-shadow-sm">
          <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:alpha-10 hover:text-primary" href="accounts.html">
            <span class="p-2 text-md font-normal text-body-color" style="color:white;">How to Login as an organization?</span>
            <div class="flex shrink-0 flex-col justify-center p-1">
              <svg class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path transform="rotate(270 10 10)" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </a>
        </section>
      `;
      suggestionsContainer.appendChild(suggestionDiv);
    }


    if(searchTerm == 'onetime' ||searchTerm=='onetimeconfiguration' || searchTerm=='How to set location?'|| searchTerm =='How to set a goal?' || searchTerm == 'How to configure an E-mail?' || searchTerm == 'How to add prefix?' || searchTerm =='How to add an account?'){
      const suggestionDiv = document.createElement('div');
      suggestionDiv.innerHTML=`
      <div class="flex flex-col gap-5">
      <section
      class="flex flex-col gap-2 rounded-xl border border-solid border-body-color-85 bg-white-alpha-20 p-2 drop-shadow-sm">
          <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:alpha-10 hover:text-primary"
              href="onetimesetlocation.html"><span
                  class="p-2 text-md font-normal text-body-color style="color:white;">How to set location?</span>
              <div class="flex shrink-0 flex-col justify-center p-1"><svg
                      class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path transform="rotate(270 10 10)" fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                  </svg></div>
          </a>
          <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:alpha-10 hover:text-primary"
              href="onetimegoalset.html"><span
                  class="p-2 text-md font-normal text-body-color style="color:white;">How to set a goal?</span>
              <div class="flex shrink-0 flex-col justify-center p-1"><svg
                      class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path transform="rotate(270 10 10)" fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                  </svg></div> 
          </a>
          <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:alpha-10 hover:text-primary"
              href="emailconfig.html"><span
                  class="p-2 text-md font-normal text-body-color style="color:white;">How to configure an E-mail?</span>
              <div class="flex shrink-0 flex-col justify-center p-1"><svg
                      class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path transform="rotate(270 10 10)" fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                  </svg></div> 
          </a>
          <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
              href="addprefix.html"><span
                  class="p-2 text-md font-normal text-body-color style="color:white;">How to add prefix?</span>
              <div class="flex shrink-0 flex-col justify-center p-1"><svg
                      class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path transform="rotate(270 10 10)" fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                  </svg></div> 
          </a>
          <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
              href="addaccount.html"><span
                  class="p-2 text-md font-normal text-body-color style="color:white;">How to add an account?</span>
              <div class="flex shrink-0 flex-col justify-center p-1"><svg
                      class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path transform="rotate(270 10 10)" fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                  </svg></div> 
          </a>
      </section>
      `;
      suggestionsContainer.appendChild(suggestionDiv);
    }
    if(searchTerm == 'employee' ||searchTerm=='employeecreation' || searchTerm=='How to add an Employee?'|| searchTerm =='How to give permission to Employee?'){
      const suggestionDiv = document.createElement('div');
      suggestionDiv.innerHTML=`
      <div class="flex flex-col gap-5">
                        <section
                        class="flex flex-col gap-2 rounded-xl border border-solid border-body-color-85 bg-white-alpha-20 p-2 drop-shadow-sm">
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                                href="addemployee.html"><span
                                    class="p-2 text-md font-normal text-body-color style="color:white;">How to add an Employee?</span>
                                <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                        class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="permission.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to give permission to Employees?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                        </a>
                        </section>
                        `;
                        suggestionsContainer.appendChild(suggestionDiv);
    }
    if(searchTerm == 'emplogin' ||searchTerm=='employeelogin' || searchTerm=='How to Clock in?'|| searchTerm =='How to add Register?' || searchTerm =='How to Logout?'){
      const suggestionDiv = document.createElement('div');
      suggestionDiv.innerHTML=`
      <div class="flex flex-col gap-5">
                        <section
                        class="flex flex-col gap-2 rounded-xl border border-solid border-body-color-85 bg-white-alpha-20 p-2 drop-shadow-sm">
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                                href="clockin.html"><span
                                    class="p-2 text-md font-normal text-body-color style="color:white;">How to Clock in?</span>
                                <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                        class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="register.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to add Register?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                        </a>
                        <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="logout.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to Logout?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                        </a>
                        </section>
                        `;
                        suggestionsContainer.appendChild(suggestionDiv);
    }
    if( searchTerm == 'createproduct'|| searchTerm=='How to add a Warehouse?' || searchTerm=='How to add Product Category?'|| searchTerm =='How to Add Category?' || searchTerm =='How to Add Sub Category?'||
     searchTerm =='How to add Product Variations?'||searchTerm =='How to add Product Variation Variable?'|| searchTerm=='How to Add New Product?' || searchTerm=='How to Assign Product?'){
      const suggestionDiv = document.createElement('div');
      suggestionDiv.innerHTML=`
      <div class="flex flex-col gap-5">
      <section
      class="flex flex-col gap-2 rounded-xl border border-solid border-body-color-85 bg-white-alpha-20 p-2 drop-shadow-sm">
          <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
              href="addwarehouse.html"><span
                  class="p-2 text-md font-normal text-body-color style="color:white;">How to add a Warehouse?</span>
              <div class="flex shrink-0 flex-col justify-center p-1"><svg
                      class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path transform="rotate(270 10 10)" fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                  </svg></div>
          </a>
          <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
          href="addproductcategory.html"><span
              class="p-2 text-md font-normal text-body-color style="color:white;">How to add Product Category?</span>
          <div class="flex shrink-0 flex-col justify-center p-1"><svg
                  class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path transform="rotate(270 10 10)" fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
              </svg></div>
      </a>
      <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
          href="addproductcategory.html"><span
              class="p-2 text-md font-normal text-body-color style="color:white;">How to Add Category?</span>
          <div class="flex shrink-0 flex-col justify-center p-1"><svg
                  class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path transform="rotate(270 10 10)" fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
              </svg></div>
      </a>
      <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
          href="addproductsubcategory.html"><span
              class="p-2 text-md font-normal text-body-color style="color:white;">How to Add Sub Category?</span>
          <div class="flex shrink-0 flex-col justify-center p-1"><svg
                  class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path transform="rotate(270 10 10)" fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
              </svg></div>
      </a>
      <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
          href="addproductvariation.html"><span
              class="p-2 text-md font-normal text-body-color style="color:white;">How to add Product Variations?</span>
          <div class="flex shrink-0 flex-col justify-center p-1"><svg
                  class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path transform="rotate(270 10 10)" fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
              </svg></div>
      </a>
      <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
          href="productvariationvariable.html"><span
              class="p-2 text-md font-normal text-body-color style="color:white;">How to add Product Variation Variable?</span>
          <div class="flex shrink-0 flex-col justify-center p-1"><svg
                  class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path transform="rotate(270 10 10)" fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
              </svg></div>
      </a>
      <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
          href="addnewproduct.html"><span
              class="p-2 text-md font-normal text-body-color style="color:white;">How to Add New Product?</span>
          <div class="flex shrink-0 flex-col justify-center p-1"><svg
                  class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path transform="rotate(270 10 10)" fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
              </svg></div>
      </a>
      <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
      href="assignproduct.html"><span
          class="p-2 text-md font-normal text-body-color style="color:white;">How to Assign Product?</span>
      <div class="flex shrink-0 flex-col justify-center p-1"><svg
              class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path transform="rotate(270 10 10)" fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
          </svg></div>
  </a>
      </section>
      `;
      suggestionsContainer.appendChild(suggestionDiv);
    }
    if(searchTerm == 'create' || searchTerm == 'createcustomer'|| searchTerm=='customer' || searchTerm=='How to create Customer Group?'|| searchTerm ==' How to Add Customer?'){
     const suggestionDiv = document.createElement('div');
     suggestionDiv.innerHTML=`
     <div class="flex flex-col gap-5">
                        <section
                        class="flex flex-col gap-2 rounded-xl border border-solid border-body-color-85 bg-white-alpha-20 p-2 drop-shadow-sm">
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                                href="customergroupcreation.html"><span
                                    class="p-2 text-md font-normal text-body-color style="color:white;">How to create Customer Group?</span>
                                <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                        class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="addcustomer.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;"> How to Add Customer?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                            </a>
                        </section>
                        `;
                        suggestionsContainer.appendChild(suggestionDiv);
                      }  
                      if(searchTerm == 'createsup' || searchTerm == 'createsupplie'|| searchTerm=='How to Add Supplier?'){
                        const suggestionDiv = document.createElement('div');
                        suggestionDiv.innerHTML=`
                        <div class="flex flex-col gap-5">
                        <section
                        class="flex flex-col gap-2 rounded-xl border border-solid border-body-color-85 bg-white-alpha-20 p-2 drop-shadow-sm">
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                                href="addsupplier.html"><span
                                    class="p-2 text-md font-normal text-body-color style="color:white;">How to Add Supplier?</span>
                                <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                        class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg></div>
                            </a>
                         </section>
                         `;  
                         suggestionsContainer.appendChild(suggestionDiv);
                        }  
                        if(searchTerm == 'createpur' || searchTerm == 'createpurchase'|| searchTerm=='How to Create Purchase Order?'){
                          const suggestionDiv = document.createElement('div');
                          suggestionDiv.innerHTML=`
                          <div class="flex flex-col gap-5">
                        <section
                        class="flex flex-col gap-2 rounded-xl border border-solid border-body-color-85 bg-white-alpha-20 p-2 drop-shadow-sm">
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                                href="createpurchaseorder.html"><span
                                    class="p-2 text-md font-normal text-body-color style="color:white;">How to Create Purchase Order?</span>
                                <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                        class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg></div>
                            </a>
                        </section>
                        `;
                         suggestionsContainer.appendChild(suggestionDiv);
                      } 
                      if(searchTerm == 'sale' || searchTerm == 'saleproduct'|| searchTerm=='How to Sale a product on POS?' || searchTerm=='How to Add Register?'|| searchTerm=='>How to Add Product in Cart?' || searchTerm=='How to Add Customer Name?'||searchTerm=='How to add Product in Draft?'
                      || searchTerm=='How to Add Coupon?' || searchTerm=='How to Purchase Drafted Products?'){
                        const suggestionDiv = document.createElement('div');
                        suggestionDiv.innerHTML=`
                        <div class="flex flex-col gap-5">
                        <section
                        class="flex flex-col gap-2 rounded-xl border border-solid border-body-color-85 bg-white-alpha-20 p-2 drop-shadow-sm">
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                                href="saleproduct.html"><span
                                    class="p-2 text-md font-normal text-body-color style="color:white;">How to Sale a product on POS?</span>
                                <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                        class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="addregister.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to Add Register?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                        </a>
                        <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="addproductcart.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to Add Product in Cart?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                        </a>
                        <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="addcustomername.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to Add Customer Name?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                        </a>
                        <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="addproductdraft.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to add Product in Draft?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                        </a>
                        <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="addcoupon.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to Add Coupon?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                        </a>
                        <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="purchasedraftproduct.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to Purchase Drafted Products?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                        </a>
                        </section>
                        `;
                        suggestionsContainer.appendChild(suggestionDiv);
                      }
                      if(searchTerm == 'off'||searchTerm == 'offers' || searchTerm == 'discount'|| searchTerm=='offersanddiscount' || searchTerm=='How to add Offers and Discount?'){
                        const suggestionDiv = document.createElement('div');
                        suggestionDiv.innerHTML=`
                        <div class="flex flex-col gap-5">
                        <section
                        class="flex flex-col gap-2 rounded-xl border border-solid border-body-color-85 bg-white-alpha-20 p-2 drop-shadow-sm">
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                                href="offersanddiscount.html"><span
                                    class="p-2 text-md font-normal text-body-color style="color:white;">How to add Offers and Discount?</span>
                                <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                        class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg></div>
                            </a>
                        </section>
                        `;
                        suggestionsContainer.appendChild(suggestionDiv);
                      }
                      if(searchTerm == 'createsale' || searchTerm=='How to Create Sale?'){
                        const suggestionDiv = document.createElement('div');
                        suggestionDiv.innerHTML=`
                        <div class="flex flex-col gap-5">
                        <section
                        class="flex flex-col gap-2 rounded-xl border border-solid border-body-color-85 bg-white-alpha-20 p-2 drop-shadow-sm">
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                                href="createsale.html"><span
                                    class="p-2 text-md font-normal text-body-color style="color:white;">How to Create Sale?</span>
                                <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                        class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg></div>
                            </a>
                        </section>
                        `;
                        suggestionsContainer.appendChild(suggestionDiv);
                      }
                      if(searchTerm == 'quotes'||searchTerm == 'createquotes' || searchTerm=='How to Create Quotes?'){
                        const suggestionDiv = document.createElement('div');
                        suggestionDiv.innerHTML=`
                        <div class="flex flex-col gap-5">
                        <section
                        class="flex flex-col gap-2 rounded-xl border border-solid border-body-color-85 bg-white-alpha-20 p-2 drop-shadow-sm">
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                                href="createquote.html"><span
                                    class="p-2 text-md font-normal text-body-color style="color:white;">How to Create Quotes?</span>
                                <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                        class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg></div>
                            </a>
                        </section>
                        `;
                        suggestionsContainer.appendChild(suggestionDiv);
                      }    
                      if(searchTerm == 'credit'|| searchTerm == 'creditnote' || searchTerm =='How to Credit Notes?'){
                        const suggestionDiv = document.createElement('div');
                        suggestionDiv.innerHTML=`
                        <div class="flex flex-col gap-5">
                        <section
                        class="flex flex-col gap-2 rounded-xl border border-solid border-body-color-85 bg-white-alpha-20 p-2 drop-shadow-sm">
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                                href="creditnotes.html"><span
                                    class="p-2 text-md font-normal text-body-color style="color:white;y">How to Credit Notes?</span>
                                <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                        class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg></div>
                            </a>
                        </section>
                        `;  
                        suggestionsContainer.appendChild(suggestionDiv);
                      } 
                      if(searchTerm == 'stock'|| searchTerm == 'stocktransfer' || searchTerm =='How to do Stock Transfer?'){
                        const suggestionDiv = document.createElement('div');
                        suggestionDiv.innerHTML=`
                      <div class="flex flex-col gap-5">
                      <section
                      class="flex flex-col gap-2 rounded-xl border border-solid border-body-color-85 bg-white-alpha-20 p-2 drop-shadow-sm">
                          <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                              href="stocktransfer.html"><span
                                  class="p-2 text-md font-normal text-body-color style="color:white;">How to do Stock Transfer?</span>
                              <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                      class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                  </svg></div>
                          </a>
                      </section>
                      `;
                      suggestionsContainer.appendChild(suggestionDiv);
                    } 
                    if(searchTerm == 'return'|| searchTerm == 'returnstock' || searchTerm =='How to Return Stock?'){
                      const suggestionDiv = document.createElement('div');
                      suggestionDiv.innerHTML=`
                      <div class="flex flex-col gap-5">
                        <section
                        class="flex flex-col gap-2 rounded-xl border border-solid border-body-color-85 bg-white-alpha-20 p-2 drop-shadow-sm">
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                                href="returnstock.html"><span
                                    class="p-2 text-md font-normal text-body-color style="color:white;">How to Return Stock?</span>
                                <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                        class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg></div>
                            </a>
                        </section>
                        `;
                        suggestionsContainer.appendChild(suggestionDiv);
                      } 
                      if(searchTerm == 'support'|| searchTerm == 'supportticket' || searchTerm =='How to Create Support Ticket?'){
                        const suggestionDiv = document.createElement('div');
                        suggestionDiv.innerHTML=`
                        <div class="flex flex-col gap-5">
                        <section
                        class="flex flex-col gap-2 rounded-xl border border-solid border-body-color-85 bg-white-alpha-20 p-2 drop-shadow-sm">
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                                href="supportticket.html"><span
                                    class="p-2 text-md font-normal text-body-color style="color:white;">How to Create Support Ticket?</span>
                                <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                        class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg></div>
                            </a>
                        </section>
                        `;
                        suggestionsContainer.appendChild(suggestionDiv);
                      } 
                  
                      if(searchTerm == 'view'|| searchTerm == 'data' || searchTerm =='viewdata'||searchTerm =='reports'|| searchTerm =='How to View Data and Reports?'|| searchTerm=='How to view Business Register?'
                      || searchTerm == 'How to view Account Statements?' || searchTerm =='How to view Customer Account Statement?' || searchTerm == 'How to view Supplier Account Statement?' || searchTerm =='How to view GST Statement?'
                      || searchTerm == 'How to view Product Sales Report?' || searchTerm == 'How to view Graphical Reports?' || searchTerm =='How to view Trending Product Report?' || searchTerm == 'How to view Profit Graphical Report?'
                      || searchTerm == 'How to view Top Customer Graph Report?' || searchTerm == 'How to view Income vs Expense Report?' || searchTerm == 'How to view Income Graphical Representation?' || searchTerm == 'How to view Expense Graphical Representation?'
                      || searchTerm == 'How to view Summary and Report?' || searchTerm == 'How to view Statistics?' || searchTerm == 'How to view Profit Summary and Report?' || searchTerm == 'How to view Calculate Income?' || searchTerm =='How to view Calculate Expense?'
                      || searchTerm == 'How to view Sales Data and Report?' || searchTerm == 'How to view Product Summary and Report?' || searchTerm == 'How to view Employee Sales Commission?'){
                        const suggestionDiv = document.createElement('div');
                        suggestionDiv.innerHTML=`
                        <div class="flex flex-col gap-5">
                        <section
                        class="flex flex-col gap-2 rounded-xl border border-solid border-body-color-85 bg-white-alpha-20 p-2 drop-shadow-sm">
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                                href="viewdataandreports.html"><span
                                    class="p-2 text-md font-normal text-body-color style="color:white;">How to View Data and Reports?</span>
                                <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                        class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="businessregister.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to view Business Register?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="accountstatements.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to view Account Statements?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="customeraccountstatement.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to view Customer Account Statement?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="supplieraccountstatement.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to view Supplier Account Statement?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="gststatement.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to view GST Statement?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="productsalereport.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to view Product Sales Report?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="graphicalreports.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to view Graphical Reports?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="trendingproductreport.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to view Trending Product Report?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="profitgraphicalreport.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to view Profit Graphical Report?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="topcustomergraphreport.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to view Top Customer Graph Report?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="incomeexpensereport.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to view Income vs Expense Report?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="incomegraphicalrep.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to view Income Graphical Representation?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="expensegraphicalrep.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to view Expense Graphical Representation?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="summaryreport.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to view Summary and Report?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="statistics.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to view Statistics?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="profitsummary.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to view Profit Summary and Report?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="calculateincome.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to view Calculate Income?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="calculateexpense.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to view Calculate Expense?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="salesdatareport.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to view Sales Data and Report?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="productsummaryreport.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to view Product Summary and Report?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                            </a>
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                            href="employeesalescommission.html"><span
                                class="p-2 text-md font-normal text-body-color style="color:white;">How to view Employee Sales Commission?</span>
                            <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                    class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                            </a>
                        </section>
                        `;
                        suggestionsContainer.appendChild(suggestionDiv);
                    }
                    if(searchTerm == 'edit'|| searchTerm == 'editprofile' || searchTerm =='How to Edit Profile?'){
                      const suggestionDiv = document.createElement('div');
                      suggestionDiv.innerHTML=`
                      <div class="flex flex-col gap-5">
                        <section
                        class="flex flex-col gap-2 rounded-xl border border-solid border-body-color-85 bg-white-alpha-20 p-2 drop-shadow-sm">
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                                href="editprofile.html"><span
                                    class="p-2 text-md font-normal text-body-color style="color:white;">How to Edit Profile?</span>
                                <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                        class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg></div>
                            </a>
                        </section>
                        `;
                        suggestionsContainer.appendChild(suggestionDiv);
                      } 
                      if(searchTerm == 'logout'|| searchTerm =='How to Logout?'){
                        const suggestionDiv = document.createElement('div');
                        suggestionDiv.innerHTML=`
                        <div class="flex flex-col gap-5">
                        <section
                        class="flex flex-col gap-2 rounded-xl border border-solid border-body-color-85 bg-white-alpha-20 p-2 drop-shadow-sm">
                            <a class="duration-250 flex flex-row justify-between gap-2 rounded-lg no-underline transition ease-linear hover:bg-primary-alpha-10 hover:text-primary"
                                href="loggout.html"><span
                                    class="p-2 text-md font-normal text-body-color style="color:white;">How to Logout?</span>
                                <div class="flex shrink-0 flex-col justify-center p-1"><svg
                                        class="block h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path transform="rotate(270 10 10)" fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg></div>
                            </a>
                        </section>
                          `;
                          suggestionsContainer.appendChild(suggestionDiv);
                        } 
  });
});
  