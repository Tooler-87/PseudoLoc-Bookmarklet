//-----Pseudo_Loc_Generic-----
var arr = ['div', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'b', 'i', 'p', 'span', 'u', 'li', 'tr'];
var arr_alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // Spaces added to avoid appended text appearing as one long word.

for (var i = 0; i < arr.length; i++) {
    $('body ' + arr[i]).each(function (index) {
        var txt = $(this).contents().filter(function () {
            return this.nodeType == 3;
        }).text();
        if (/\S/.test(txt)) {
            var tag = $(this).html();
            txt = txt.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
            if (txt.length < 3) {} else {
                var result = txt;
                var extra_lth = (result.length / 100) * 30; //Increase to suit.
                extra_lth = Math.round(extra_lth);
                var extra = '';
                for (var x = 0; x < extra_lth; x++) {
                    extra += arr_alphabet[Math.floor(Math.random() * arr_alphabet.length)];
                }
                var re = new RegExp(txt, 'g');
                var updated = tag.replace(re, result);
                var add = '[' + extra + ']';
                $(this).contents().filter(function () {
                    return this.nodeType == 3;
                })[0].nodeValue += add;
            }
        }
    });
}