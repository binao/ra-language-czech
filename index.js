module.exports = {
    ra: {
        action: {
            delete: 'Smazat',
            show: 'Ukázat',
            list: 'Seznam',
            save: 'Uložit',
            create: 'Vytvořit',
            edit: 'Upravit',
            sort: 'Seřadit',
            cancel: 'Zrušit',
            undo: 'Vrátit',
            refresh: 'Obnovit',
            add: 'Přidat',
            remove: 'Odstranit',
            add_filter: 'Přidat filtr',
            remove_filter: 'Odstranit filtr',
            back: 'Jít zpět',
            bulk_actions: '%{smart_count} vybráno',
        },
        boolean: {
            true: 'Ano',
            false: 'Ne',
        },
        page: {
            list: '%{name} Seznam',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'Vytvořit %{name}',
            dashboard: 'Dashboard',
            not_found: 'Nenalezeno',
            loading: 'Načítání',
        },
        input: {
            file: {
                upload_several: 'Přetáhněte soubory pro nahrání nebo klikněte pro výběr',
                upload_single: 'Přetáhněte soubor pro nahrání nebo klikněte pro jeho výběr',
            },
            image: {
                upload_several: 'Přetáhněte obrázky pro nahrání nebo klikněte pro výběr',
                upload_single: 'Přetáhněte obrázek pro nahrání nebo klikněte pro jeho výběr',
            },
            references: {
                all_missing: 'Nelze nalézt referencovaná data',
                many_missing: 'Minimálně jedna z referencí se nezdá býti nadále dostupná',
                single_missing: 'Reference se nezdá býti nadále dostupná.',
            },
        },
        message: {
            yes: 'Ano',
            no: 'Ne',
            are_you_sure: 'Jste si jistý?',
            about: 'O',
            not_found: 'Nic nebylo nalezeno',
            loading: 'Stránka se načítá, prosím strpení',
            invalid_form: 'Formulář není validní. Prosím zkontrolujte chyby.',
            delete_title: 'Smazat %{name} #%{id}',
            delete_content: 'Jste si jistý, že chcete smazat tuto položku?',
            bulk_delete_title: 'Smazat %{name} |||| Smazat %{smart_count} %{name} položek',
            bulk_delete_content: 'Jste si jistý, že chcete smazat %{name}? |||| Jste si jistý, že chcete smazat těchto %{smart_count} položek?',
        },
        navigation: {
            no_results: 'Žádné výsledky nenalezeny',
            no_more_results: 'Stránka číslo %{page} je mimo rozsah. Zkuste předchozí.',
            page_out_of_boundaries: 'Stránka číslo %{page} je mimo rozsah',
            page_out_from_end: 'Nelze se přepnout za poslední stranou',
            page_out_from_begin: 'Nelze se přepnout před stranu 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} z %{total}',
            next: 'Další',
            prev: 'Předchozí',
        },
        auth: {
            username: 'Uživatelské jméno',
            password: 'Heslo',
            sign_in: 'Přihlásit se',
            sign_in_error: 'Ověření selhalo, zkuste to znovu',
            logout: 'Odhlásit se',
        },
        notification: {
            updated: 'Prvek aktualizován |||| %{smart_count} prvků aktualizováno',
            created: 'Prvek vytvořen',
            deleted: 'Prvek smazán |||| %{smart_count} prvků smazáno',
            bad_item: 'Nesprávný prvek',
            item_doesnt_exist: 'Prvek neexistuje',
            http_error: 'Chyba komunikace serveru',
            canceled: 'Akce zrušena',
        },
        validation: {
            required: 'Povinné pole',
            minLength: 'Musí obsahovat nejméně %{min} znaků',
            maxLength: 'Může obsahovat maximálně %{max} znaků',
            minValue: 'Musí být minimálně %{min}',
            maxValue: 'Múže být maximálně %{max}',
            number: 'Musí být číslo',
            email: 'Musí být validní emailová adresa',
            oneOf: 'Musí splňovat jedno z: %{options}',
            regex: 'Musí být ve specifickém formátu (regexp): %{pattern}',
        },
    },
};
