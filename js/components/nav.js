document.getElementById('nav').innerHTML=`

<div class="header_nav" id="header_nav_pin">
    <div class="header_nav_inner">
        <div class="header_nav_container">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div
                            class="header_nav_content d-flex flex-row align-items-center justify-content-start">
                            <nav class="main_nav">
                                <ul>
                                    <li id="home"><a href="index.html">Home</a></li>
                                    <li id="cfp"><a href="CFP.html">Call For Papers</a></li>
                                    <li id="organizers"><a href="organizers.html">Organizers</a></li>
                                    <li id="schedule"><a href="program.html">Schedule</a></li>
                                    <li>
                                        <select onchange='location = this.value;'>
                                            <option value='#'>2020</option>
                                            <!--<option value='2019/index.html'>2019</option>-->
                                        </select>
                                    </li>
                                </ul>
                            </nav>

                            <div class="header_extra ml-auto">
                                <div class="button header_button">
                                    <a
                                        href="http://aaaiconf.cvent.com/events/aaai-20/event-summary-92a1ebc42cc34d5696d19711ace8def6.aspx">Register</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

`;