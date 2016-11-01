/**
 * Created by Mihai Tudor on 01.11.2016.
 */


(function ($, window, document, undefined) {
    'use strict';

    var defaults = {
        share: true,
        facebook: true,
        pinterest: true,
        twitter: true
    };

    var Share = function (element) {

        this.core = $(element).data('lightGallery');
        this.core.s = $.extend({}, defaults, this.core.s);
        this.init();
        return this;
    };

    Share.prototype.init = function () {
        var shareBox = '';
        if (this.core.s.share) {
            if (this.core.s.facebook) {
                shareBox += '<span class="lg-facebook lg-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="lg-facebook" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve"><path d="M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z     M433.5,51v76.5h-51c-15.3,0-25.5,10.2-25.5,25.5v51h76.5v76.5H357V459h-76.5V280.5h-51V204h51v-63.75    C280.5,91.8,321.3,51,369.75,51H433.5z" fill="#999999"/></svg></span>';
            }
            if (this.core.s.pinterest) {
                shareBox += '<span class="lg-pinterest lg-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path d="M426.676,0H85.324C38.199,0,0,38.21,0,85.343v341.315C0,473.791,38.199,512,85.324,512h341.352   C473.801,512,512,473.791,512,426.658V85.343C512,38.21,473.801,0,426.676,0z M280.822,342.059   c-23.26-1.807-33.021-13.328-51.252-24.403c-10.03,52.59-22.281,103.01-58.569,129.345   c-11.202-79.482,16.447-139.184,29.285-202.557c-21.893-36.853,2.635-111.017,48.81-92.737   c56.812,22.474-49.2,137.004,21.966,151.31c74.309,14.934,104.643-128.931,58.57-175.714c-66.578-67.553-193.8-1.54-178.156,95.178   c3.807,23.646,28.236,30.819,9.762,63.452c-42.61-9.445-55.325-43.052-53.688-87.855c2.634-73.337,65.892-124.682,129.343-131.783   c80.243-8.982,155.553,29.454,165.954,104.938C414.553,256.423,366.623,348.693,280.822,342.059z" fill="#999999"/></svg></span>';
            }
            if (this.core.s.twitter) {
                shareBox += '<span class="lg-twitter lg-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="lg-twitter" x="0px" y="0px" viewBox="0 0 486.392 486.392" style="enable-background:new 0 0 486.392 486.392;" xml:space="preserve" width="20px" height="20px"><path d="M395.193,0H91.198C40.826,0,0,40.826,0,91.198v303.995c0,50.372,40.826,91.198,91.198,91.198     h303.995c50.372,0,91.198-40.827,91.198-91.198V91.198C486.392,40.826,445.565,0,395.193,0z M364.186,188.598l0.182,7.752     c0,79.16-60.221,170.359-170.359,170.359c-33.804,0-65.268-9.91-91.776-26.904c4.682,0.547,9.454,0.851,14.288,0.851     c28.059,0,53.868-9.576,74.357-25.627c-26.204-0.486-48.305-17.814-55.935-41.586c3.678,0.669,7.387,1.034,11.278,1.034     c5.472,0,10.761-0.699,15.777-2.067c-27.39-5.533-48.031-29.7-48.031-58.701v-0.76c8.086,4.499,17.297,7.174,27.116,7.509     c-16.051-10.731-26.63-29.062-26.63-49.825c0-10.974,2.949-21.249,8.086-30.095c29.518,36.236,73.658,60.069,123.422,62.562     c-1.034-4.378-1.55-8.968-1.55-13.649c0-33.044,26.812-59.857,59.887-59.857c17.206,0,32.771,7.265,43.714,18.908     c13.619-2.706,26.448-7.691,38.03-14.531c-4.469,13.984-13.953,25.718-26.326,33.135c12.069-1.429,23.651-4.682,34.382-9.424     C386.073,169.659,375.889,180.208,364.186,188.598z" fill="#999999"/></svg></span>';
            }
            this.core.$outer.find('.lg-toolbar').append(shareBox);
            this.enableShare();
        }
    };


    Share.prototype.enableShare = function () {
        var _this = this;
        this.core.$outer.find('.lg-facebook').on('click.lg', function () {
            _this.facebookShare()
        });
        this.core.$outer.find('.lg-pinterest').on('click.lg', function () {
            _this.pinterestShare()
        });
        this.core.$outer.find('.lg-twitter').on('click.lg', function () {
            _this.twitterShare()
        });

    };

    Share.prototype.facebookShare = function () {
        var title = this.getTitle(),
            link = this.getLink(),
            loc = this.getUri(),
            share_link = 'https://www.facebook.com/sharer/sharer.php?u=' + loc + '&picture=' + link;
        if (title) {
            share_link += '&title=' + title;
        }
        window.open(share_link, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    };

    Share.prototype.pinterestShare = function () {
        var title = this.getTitle(),
            link = this.getLink(),
            loc = this.getUri(),
            share_link = 'http://pinterest.com/pin/create/button/?url=' + loc + '&media=' + link;
        if (title) {
            share_link += '&description=' + title;
        }
        window.open(share_link, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    };

    Share.prototype.twitterShare = function () {
        var title = this.getTitle(),
            link = this.getLink(),
            loc = this.getUri(),
            share_link = 'https://twitter.com/intent/tweet?url=' + link + '&original_referer=' + loc;
        if (title) {
            share_link += '&text=' + title;
        }
        window.open(share_link, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    };

    Share.prototype.getUri = function () {
        var loc = window.location.href,
            index = loc.indexOf('#');
        return (index > 0) ? loc.substring(0, index) : loc
    };

    Share.prototype.getTitle = function () {
        var title;
        if (this.core.s.dynamic) {
            title = this.core.s.dynamicEl[this.core.index].subHtml;
        } else {
            var $elem = $(this.core.$items[this.core.index]);
            title = $elem.attr('data-sub-html');
            if (this.core.s.getCaptionFromTitleOrAlt && !title) {
                title = $elem.attr('title') || $elem.find('img').first().attr('alt');
            }
        }
        return $(title).text();
    };

    Share.prototype.getLink = function () {
        var link;
        if (this.core.s.dynamic) {
            link = this.s.dynamicEl[this.core.index].src;
        } else {
            var $elem = $(this.core.$items[this.core.index]);
            link = $elem.attr('href') || $elem.attr('data-src');
        }
        return link;
    };

    Share.prototype.destroy = function () {
    };

    $.fn.lightGallery.modules.share = Share;

})(jQuery, window, document);