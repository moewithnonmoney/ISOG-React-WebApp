import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import moment from "moment/moment";
import isogLogo from "./assests/images/isog.png";
import vector from "./assests/images/Vector.png";
import cloud from "./assests/images/cloud.png";

// use effect comes last
function App() {
  const [bigTime, setBigTime] = useState();
  const [fajrAthan, setFajrAthan] = useState();
  const [dhurAthan, setDhurAthan] = useState();
  const [asrAthan, setAsrAthan] = useState();
  const [maghribAthan, setMaghribAthan] = useState();
  const [ishaAthan, setIshaAthan] = useState();

  const [fajrPrayer, setFajrPrayer] = useState();
  const [dhurPrayer, setDhurPrayer] = useState();
  const [asrPrayer, setAsrPrayer] = useState();
  const [maghribPrayer, setMaghribPrayer] = useState();
  const [ishaPrayer, setIshaPrayer] = useState();

  const [shuruq, setShuruq] = useState();
  const [currentDate, setCurrentDate] = useState();
  const [currentCustomDate, setCurrentCustomDate] = useState();
  const [momentDate, setMomentDate] = useState();
  const [currentHijriDay, setCurrentHijriDay] = useState();
  const [currentHijriMonth, setCurrentHijriMonth] = useState();
  const [currentHijriYear, setCurrentHijriYear] = useState();
  const [weatherValue, setWeatherValue] = useState();
  const [weatherText, setWeatherText] = useState();

  const [hadith, setHadith] = useState();
  const [nextPrayer, setNextPrayer] = useState();

  const getHijriDate = async () => {
    try {
      const response = await fetch(
        `https://api.aladhan.com/v1/gToH?=${currentDate}`
      );
      const json = await response.json();
      setCurrentHijriDay(json.data.hijri.day);
      setCurrentHijriMonth(json.data.hijri.month.ar);
      setCurrentHijriYear(json.data.hijri.year);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updateTime(); // Initial update
    const interval = setInterval(updateTime, 1000); // Update every second
    return () => clearInterval(interval); // Cleanup
  }, []);

  const updateTime = () => {
    const currentTime = moment()
      .utcOffset(-4 * 60)
      .format("h:mm"); // Adjust UTC offset here
    setBigTime(currentTime);
  };
  const getAthan = async () => {
    try {
      const response = await fetch(
        `https://api.aladhan.com/v1/timingsByCity?city=Guelph&country=Canada&method=2`
      );
      const json = await response.json();
      setFajrAthan(convertTo12Hour(json.data.timings.Fajr));
      setShuruq(addMinutesToTime(json.data.timings.Sunrise, 15));
      setDhurAthan(convertTo12Hour(json.data.timings.Dhuhr));
      setAsrAthan(convertTo12Hour(json.data.timings.Asr));
      setMaghribAthan(convertTo12Hour(json.data.timings.Maghrib));
      setIshaAthan(convertTo12Hour(json.data.timings.Isha));
      convertTo12Hour(json.data.timings.Sunrise);
    } catch (error) {
      console.log(error);
    }
  };

  const getPrayerTimes = async () => {
    try {
      const response = await fetch(
        `https://isog-prayer-times-server.onrender.com/prayers`
      );
      const json = await response.json();
      setFajrPrayer(json.fajr);
      setDhurPrayer(json.dhuhr);
      setAsrPrayer(json.asr);
      setMaghribPrayer(json.maghrib);
      setIshaPrayer(json.isha);
    } catch (e) {
      console.log(e);
    }
  };

  const getHadiths = async () => {
    try {
      const response = await fetch(
        `https://isog-prayer-times-server.onrender.com/hadiths`
      );
      const json = await response.json();
      setHadith(json.hadith);
    } catch (e) {
      console.log(e);
    }
  };

  const getNextPrayer = async () => {
    try {
      const response = await fetch(
        "https://isog-prayer-times-server.onrender.com/nextPrayers",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            // Add other headers if needed
          },
          body: JSON.stringify({
            // Your PUT request payload (if necessary)
            // Example: { key: 'value' }
          }),
        }
      );
      const json = await response.json();
      setNextPrayer(json.nextPrayer);
    } catch (e) {
      console.log(e);
    }
  };

  function convertTo12Hour(oldFormatTime) {
    var oldFormatTimeArray = oldFormatTime.split(":");

    var HH = parseInt(oldFormatTimeArray[0]);
    var min = oldFormatTimeArray[1];

    var AMPM = HH >= 12 ? "PM" : "AM";
    HH = HH % 12;
    HH = HH ? HH : 12;
    var hours = HH < 10 ? "0" + HH : HH;

    var newFormatTime = hours + ":" + min;
    return newFormatTime;
  }

  const addMinutesToTime = (timeString, minutesToAdd) => {
    const [hours, minutes] = timeString.split(":").map(Number);
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes + minutesToAdd);
    const newHours = date.getHours().toString().padStart(2, "0");
    const newMinutes = date.getMinutes().toString().padStart(2, "0");

    return `${newHours}:${newMinutes}`;
  };

  const getDate = () => {
    var today = new Date(),
      date =
        today.getMonth() +
        1 +
        "-" +
        today.getDate() +
        "-" +
        today.getFullYear();
    setCurrentCustomDate(date);
    setCurrentDate(date);
  };

  const momentGetDate = () => {
    setMomentDate(moment().format("ddd MMMM D, YYYY"));
  };

  const [announcements, setAnnouncements] = useState([]);

  const getAnnouncements = async () => {
    try {
      const response = await fetch(
        `https://isog-prayer-times-server.onrender.com/announcements`
      );
      const data = await response.json();
      setAnnouncements(data.annoucements);
    } catch (e) {}
  };

  const [countdownTimeHr, setCountdownTimeHr] = useState("");
  const [countdownTimeMn, setCountdownTimeMn] = useState("");
  const [upcomingPrayerName, setUpcomingPrayerName] = useState("");

  useEffect(() => {
    getDate();
    getHijriDate();
    getAthan();
    momentGetDate();
    setInterval(() => {
      getDate();
      getHijriDate();
      getAthan();
      momentGetDate();
    }, 21600000);
  }, []);

  useEffect(() => {
    getPrayerTimes();
    getAnnouncements();
    getHadiths();
    getNextPrayer();

    setInterval(() => {
      getAnnouncements();
      getPrayerTimes();
      getHadiths();
      getNextPrayer();
    }, 1800000);
  }, []);

  return (
    <div className="App">
      <div>
        <div className="bigHeader">
          <div className="headerPart1">
            <div className="isogLogo">
              <img src={isogLogo} />
            </div>

            <div className="isogText">Islamic Society of Guelph</div>
          </div>

          <div className="headerPart2">
            <div className="headerFont">مسجد أبو بكر الصديق</div>
            <div className="headerFont2">www.ISOFG.ca</div>
          </div>
        </div>
        <div className="skinnySections">
          <div className="Boxes">
            <div>
              <div className="header2">
                <div className="header2Text"> TODAY'S MESSAGE</div>
              </div>
              <div className="message">{announcements}</div>
            </div>

            <div>
              <div className="header3">
                <div className="header3Text"> HADITH OF THE DAY</div>
              </div>
              <div className="message2">{hadith}</div>
            </div>
          </div>

          <div className="skinnyBoxes">
            <div className="donateBox">
              <div className="donateText">DONATE TO YOUR MASJID</div>
            </div>

            <div className="silenceBox">
              <div className="silenceText">SILENCE YOUR PHONE</div>
            </div>
          </div>

          <div className="bigPrayerSection">
            <div className="longBlue">
              <div className="startIqamah">
                <div className="start">START</div>
                <div className="iqamah">IQAMAH</div>
              </div>

              <div className="prayers">
                <div className="fajr">
                  <div>FAJR</div>
                  <div className="fajrTime">
                    {fajrAthan}
                    <span className="am">AM</span>
                  </div>
                  <div className="fajrTime">
                    {fajrPrayer}
                    <span className="am">AM</span>
                  </div>
                </div>

                <div className="fajr">
                  <div>DHUHR</div>
                  <div className="fajrTime">
                    {dhurAthan}
                    <span className="am">PM</span>
                  </div>
                  <div className="fajrTime">
                    {dhurPrayer}
                    <span className="am">PM</span>
                  </div>
                </div>

                <div className="fajr">
                  <div>ASR</div>
                  <div className="fajrTime">
                    {asrAthan}
                    <span className="am">PM</span>
                  </div>
                  <div className="fajrTime">
                    {asrPrayer}
                    <span className="am">PM</span>
                  </div>
                </div>

                <div className="fajr">
                  <div>MAGHRIB</div>
                  <div className="fajrTime">
                    {maghribAthan}
                    <span className="am">PM</span>
                  </div>
                  <div className="fajrTime">
                    {maghribAthan}
                    <span className="am">PM</span>
                  </div>
                </div>

                <div className="fajr">
                  <div>ISHA</div>
                  <div className="fajrTime">
                    {ishaAthan}
                    <span className="am">PM</span>
                  </div>
                  <div className="fajrTime">
                    {ishaPrayer}
                    <span className="am">PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="quranContainer">
          <div className="quran">
            Quran Classes For All Ages - Contact Imam (226)-505-7435
          </div>
        </div>
      </div>
      <div className="rightSide">
        <div className="dates">
          <div className="arabicDate">
            {currentHijriYear}-{currentHijriDay}-{currentHijriMonth}
          </div>
          {/*get hijri date does not display anything anymore*/}
          <div className="englishDate">{momentDate}</div>
          <div className="line"></div>
        </div>
        <div className="rightBox">
          <div className="clock">
            <div className="bigTime">{bigTime}</div>
            <span className="pm">PM</span>
          </div>
          <div className="dhuhrIqamah">
            DHUHR IQAMAH
            <div className="iqamahTime">
              <div className="ten">
                10
                <span className="am2">HR</span>
              </div>
              <div className="thirtyFive">
                35
                <span className="am2">MIN</span>
              </div>
            </div>
          </div>
          <div className="line2"></div>
        </div>
        <div className="bottomRight">
          <div className="jumuahHeader">JUMU'AH</div>
          <div className="startTime">
            <div className="time">
              1:30
              <span className="am3">PM</span>
              <div className="starts">STARTS</div>
            </div>
            <div className="time">
              1:50
              <span className="am3">PM</span>
              <div className="starts">JUMU'AH</div>
            </div>
          </div>

          <div className="ramadanFooter">
            <div className="time2">
              <div className="vector">
                <img src={vector} />
              </div>
              05:30
              <span className="am4">AM</span>
              <div className="suhoorIftar">SUHOOR</div>
            </div>
            <div className="time2">
              <div className="vector">
                <img src={cloud} />
              </div>
              8:50
              <span className="am4">PM</span>
              <div className="suhoorIftar">IFTAR</div>
            </div>
          </div>
        </div>
        <div className="ishraq">ISHRAQ 6:26</div>
      </div>
    </div>
  );
}

export default App;
