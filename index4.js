


bullet_top_names  = ["ANTON_BUL", "YOUSUF_BUL", "MARINA_BUL", "JERALD_BUL", "NIKITA_BUL","ANTON_BUL", "YOUSUF_BUL", "MARINA_BUL", "JERALD_BUL", "NIKITA_BUL","ANTON_BUL", "YOUSUF_BUL", "MARINA_BUL", "JERALD_BUL", "NIKITA_BUL", "ANTON_BUL"]
blitz_top_names  = ["ANTON_BL", "YOUSUF_BL", "MARINA_BL", "JERALD_BL", "NIKITA_BL","ANTON_BL", "YOUSUF_BL", "MARINA_BL", "JERALD_BL", "NIKITA_BL","ANTON_BL", "YOUSUF_BL", "MARINA_BL", "JERALD_BL", "NIKITA_BL", "ANTON_BL"]
rapid_top_names  = ["ANTON_RAP", "YOUSUF_RAP", "MARINA_RAP", "JERALD_RAP", "NIKITA_RAP","ANTON_RAP", "YOUSUF_RAP", "MARINA_RAP", "JERALD_RAP", "NIKITA_RAP","ANTON_RAP", "YOUSUF_RAP", "MARINA_RAP", "JERALD_RAP", "NIKITA_RAP", "ANTON_RAP"]


bullet_top_ranks = ["GM", "NM", "CM","GM", "NM", "CM","GM", "NM", "CM","GM", "NM", "CM","GM", "NM", "CM","GM", "CM"]
blitz_top_ranks = ["GM", "NM", "CM","GM", "NM", "CM","GM", "NM", "CM","GM", "NM", "CM","GM", "NM", "CM","GM", "CM"]
rapid_top_ranks = ["GM", "NM", "CM","GM", "NM", "CM","GM", "NM", "CM","GM", "NM", "CM","GM", "NM", "CM","GM", "CM"]


bullet_top_rates = [2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999]
blitz_top_rates = [2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 19999]
rapid_top_rates = [2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999]


for (i in [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]){
    
    let html_bullet_top_name = document.getElementById("bullet_top_name" + i);
    let html_blitz_top_name = document.getElementById("blitz_top_name" + i);
    let html_rapid_top_name = document.getElementById("rapid_top_name" + i);
    let html_bullet_top_rank = document.getElementById("bullet_top_rank" + i);
    let html_blitz_top_rank = document.getElementById("blitz_top_rank" + i);
    let html_rapid_top_rank = document.getElementById("rapid_top_rank" + i);
    let html_bullet_top_rate = document.getElementById("bullet_top_rate" + i);
    let html_blitz_top_rate = document.getElementById("blitz_top_rate" + i);
    let html_rapid_top_rate = document.getElementById("rapid_top_rate" + i);


    html_bullet_top_name.textContent = bullet_top_names[i];
    html_blitz_top_name.textContent = blitz_top_names[i];
    html_rapid_top_name.textContent = rapid_top_names[i];
    html_bullet_top_rate.textContent = bullet_top_rates[i];
    html_blitz_top_rate.textContent = blitz_top_rates[i];
    html_rapid_top_rate.textContent = rapid_top_rates[i];
    html_bullet_top_rank.textContent = bullet_top_ranks[i];
    html_blitz_top_rank.textContent = blitz_top_ranks[i];
    html_rapid_top_rank.textContent = rapid_top_ranks[i];
}