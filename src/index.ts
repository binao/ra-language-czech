import { TranslationMessages } from 'ra-core';

const czechMessages: TranslationMessages = {
    ra: {
        action: {
            add: 'Přidat',
            add_filter: 'Přidat filtr',
            back: 'Jít zpět',
            bulk_actions: '%{smart_count} položka vybrána |||| %{smart_count} položky vybrány |||| %{smart_count} položek vybráno',
            cancel: 'Zrušit',
            clear_input_value: 'Smazat hodnotu',
            clone: 'Klonovat',
            close: 'Zavřít',
            close_menu: 'Zavřít menu',
            confirm: 'Potvrdit',
            create: 'Vytvořit',
            create_item: "Vytvořit",
            delete: 'Smazat',
            edit: 'Upravit',
            expand: 'Rozbalit',
            export: 'Exportovat',
            list: 'Listovat',
            move_down: "Dolů",
            move_up: "Nahoru",
            open: 'Otevřít',
            open_menu: 'Otevřít menu',
            refresh: 'Obnovit',
            remove: 'Odstranit',
            remove_all_filters: 'Odstranit všechny filtry',
            remove_filter: 'Odstranit filtr',
            save: 'Uložit',
            search: 'Hledat',
            select_all: "Vybrat vše",
            select_row: "Vybrat řádek",
            show: 'Zobrazit',
            sort: 'Seřadit',
            toggle_theme: 'Přepnout téma',
            undo: 'Vrátit',
            unselect: 'Zrušit výběr',
            update: "Aktualizovat",
        },
        auth: {
            auth_check_error: "Pro pokračování se prosím přihlaste",
            logout: 'Odhlásit se',
            password: 'Heslo',
            sign_in: 'Přihlásit se',
            sign_in_error: 'Ověření selhalo, zkuste to znovu',
            user_menu: "Profil",
            username: 'Uživatelské jméno',
        },
        boolean: {
            false: 'Ne',
            null: ' ',
            true: 'Ano',
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
            password: {
                toggle_hidden: 'Zobrazit heslo',
                toggle_visible: 'Skrýt heslo',
            },
            references: {
                all_missing: 'Nelze nalézt referencovaná data',
                many_missing: 'Minimálně jedna z referencí se nezdá býti nadále dostupná',
                single_missing: 'Reference se nezdá býti nadále dostupná.',
            },
        },
        message: {
            about: 'O',
            are_you_sure: 'Jste si jistý?',
            bulk_delete_content: 'Jste si jistý, že chcete smazat %{name}? |||| Jste si jistý, že chcete smazat tyto %{smart_count} položky? |||| Jste si jistý, že chcete smazat těchto %{smart_count} položek?',
            bulk_delete_title: 'Smazat %{name} |||| Smazat %{smart_count} %{name} položky |||| Smazat %{smart_count} %{name} položek',
            bulk_update_content: "Hromadně změnit obsah",
            bulk_update_title: "Hromadně změnit titulek",
            delete_content: 'Jste si jistý, že chcete smazat tuto položku?',
            delete_title: 'Smazat %{name} #%{id}',
            details: 'Podrobnosti',
            error: 'Nastala chyba a váš požadavek nemohl být zpracován.',
            invalid_form: 'Formulář není validní. Prosím zkontrolujte chyby.',
            loading: 'Stránka se načítá, prosím strpení',
            no: 'Ne',
            not_found: 'Nic nebylo nalezeno.',
            unsaved_changes: 'Některé změny nebyly uloženy. Chcete je ignorovat?',
            yes: 'Ano',
        },
        navigation: {
            current_page: 'Stránka %{page}',
            first: 'První stránka',
            last: 'Poslední stránka',
            next: 'Další',
            no_more_results: 'Stránka číslo %{page} je mimo rozsah. Zkuste předchozí.',
            no_results: 'Žádné výsledky nenalezeny',
            page: 'Jít na stránku %{page}',
            page_out_from_begin: 'Nelze se přepnout před stranu 1',
            page_out_from_end: 'Nelze se přepnout za poslední stranou',
            page_out_of_boundaries: 'Stránka číslo %{page} je mimo rozsah',
            page_range_info: '%{offsetBegin}-%{offsetEnd} z %{total}',
            page_rows_per_page: 'Záznamů na stránku: ',
            partial_page_range_info: '%{offsetBegin}-%{offsetEnd} z víc než %{offsetEnd}',
            previous: 'Předchozí',
            skip_nav: 'Přeskočit na obsah',
        },
        notification: {
            bad_item: 'Špatná položka',
            canceled: 'Akce zrušena',
            created: 'Položka vytvořena',
            data_provider_error:
                'dataProvider chyba. Pro více detailů zkontrolujte konzoli prohlížeče.',
            deleted: 'Položka smazána |||| %{smart_count} položky smazány |||| %{smart_count} položek smazáno',
            http_error: 'Chyba komunikace serveru',
            i18n_error: 'Nelze načíst překlady pro vybraný jazyk',
            item_doesnt_exist: 'Položka neexistuje',
            logged_out: 'Relace ukončena',
            not_authorized: 'Nemáte oprávnění k přístupu.',
            updated: 'Položka aktualizována |||| %{smart_count} položky aktualizovány |||| %{smart_count} položek aktualizováno',
        },
        page: {
            create: 'Vytvořit %{name}',
            dashboard: 'Dashboard',
            edit: '%{name} #%{id}',
            empty: 'Zatím žádný %{name}',
            error: 'Něco se pokazilo',
            invite: 'Chcete přidat?',
            list: '%{name}',
            loading: 'Načítání',
            not_found: 'Nenalezeno',
            show: '%{name} #%{id}',
        },
        sort: {
            ASC: "vzestupně",
            DESC: "sestupně",
            sort_by: "Seřadit podle %{field} %{order}",
        },
        validation: {
            email: 'Musí být validní emailová adresa',
            maxLength: 'Může obsahovat maximálně %{max} znaků',
            maxValue: 'Múže být maximálně %{max}',
            minLength: 'Musí obsahovat nejméně %{min} znaků',
            minValue: 'Musí být minimálně %{min}',
            number: 'Musí být číslo',
            oneOf: 'Musí splňovat jedno z: %{options}',
            regex: 'Musí být ve specifickém formátu (regexp): %{pattern}',
            required: 'Povinné pole',
        },
        saved_queries: {
            label: 'Uložené dotazy',
            query_name: 'Jméno dotazu',
            new_label: 'Uložit aktuální dotaz...',
            new_dialog_title: 'Uložit aktuální dotaz jako',
            remove_label: 'Odstranit uložený dotaz',
            remove_label_with_name: 'Odstranit dotaz "%{name}"',
            remove_dialog_title: 'Odstranit uložený dotaz?',
            remove_message:
                'Jste si jistí že chcete odstranit tuto položku z vašeho seznamu uložených dotazů?',
            help: 'Vyfiltrovat seznam a uložit tento dotaz na později',
        },
        configurable: {
            customize: 'Přizpůsobit',
            configureMode: 'Konfigurovat tuto stránku',
            inspector: {
                title: 'Inspektor',
                content: 'Pro konfiguraci UI elementů aplikace na ně najeďte myší',
                reset: 'Resetovat nastavení',
            },
            SimpleList: {
                primaryText: 'Primární text',
                secondaryText: 'Sekundární text',
                tertiaryText: 'Terciární text',
            },
        },
    }
};

export default czechMessages
