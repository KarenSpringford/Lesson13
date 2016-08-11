using Lesson13.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Lesson13.Controllers
{
    public class HomeController : Controller
    {
        private MVCMusicStoreContext db = new MVCMusicStoreContext();

        //GET  /Home/Index
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        //GET /Home/Browse/1
        public ActionResult Browse (int id)
        {
            ViewBag.Title = "Albums by Genre";
            var genre = db.Genres.Find(id);

            return View(genre);
        }
    }
}



